import { Link } from '@mantine/tiptap'
import Color from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import Youtube from '@tiptap/extension-youtube'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { uploadToS3 } from 'src/lib/requests'

export const useTipTapEditor = (content: string) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      TextStyle,
      Color,
      Youtube.configure({ inline: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    editorProps: {
      handleDrop: function (view, event, slice, moved) {
        if (!isDroppingExternalFiles(event, moved)) return false // not handled, use default behaviour
        uploadsWithValidation(event.dataTransfer.files).then((res) => {
          const { schema } = view.state
          const coordinates = view.posAtCoords({
            left: event.clientX,
            top: event.clientY,
          })
          if (res[0] == null) return true
          const node = schema.nodes.image.create({ src: res[0].file?.url })
          const transaction = view.state.tr.insert(coordinates.pos, node)
          return view.dispatch(transaction)
        })
        return true // handled
      },
    },
    content,
  })

  return editor
}

function isDroppingExternalFiles(event: DragEvent, moved: boolean) {
  return (
    !moved &&
    event.dataTransfer &&
    event.dataTransfer.files &&
    event.dataTransfer.files[0]
  )
}

function uploadsWithValidation(files: FileList) {
  return Promise.all(
    Array.from(files)
      .filter((file) => validateImage(file))
      .map((file) => uploadImage(file))
  )
}

function validateImage(file: File) {
  // check valid image type under 10MB
  const filesize = +(file.size / 1048576).toFixed(4) // get the filesize in MB, 1024*1024=1048576
  const result =
    (file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/webp') &&
    filesize < 10
  if (!result) {
    alert(
      '파일 형식이나 사이즈를 다시 한번 확인해주세요.\n지원형식: jpeg, png, webp, 10MB이하'
    )
  }
  return result
}

function uploadImage(file: File) {
  try {
    const timestampInSec = Math.floor(Date.now() / 1000)
    const newFileName = `article/${timestampInSec}_${file.name}`
    const newFile = new File([file], newFileName, {
      type: file.type,
      lastModified: file.lastModified,
    })
    return uploadToS3(newFile)
  } catch (error) {
    error && window.alert(error)
  }
}

// function drawImage(url: string) {}
