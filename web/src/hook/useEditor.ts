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
  return (
    (file.type === 'image/jpeg' || file.type === 'image/png') && filesize < 10
  )
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
