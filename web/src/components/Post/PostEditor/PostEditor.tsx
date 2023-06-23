import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap'
import { IconBrandYoutube, IconPhoto } from '@tabler/icons-react'
import { BubbleMenu, Editor } from '@tiptap/react'

function InsertYoutubeControl() {
  const { editor } = useRichTextEditorContext()

  const addYoutubeVideo = () => {
    const url = prompt('Enter Youtube URL')

    if (url) {
      editor?.commands.setYoutubeVideo({
        src: url,
      })
    }
  }

  return (
    <RichTextEditor.Control
      onClick={addYoutubeVideo}
      aria-label="Insert youtube video"
      title="Insert youtube video"
    >
      <IconBrandYoutube stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  )
}

function InsertImageControl() {
  const { editor } = useRichTextEditorContext()

  const addImage = () => {
    const url = prompt('Enter Image URL')

    if (url) {
      editor?.commands.setImage({
        src: url,
      })
    }
  }

  return (
    <RichTextEditor.Control
      onClick={addImage}
      aria-label="Insert image video"
      title="Insert image video"
    >
      <IconPhoto stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  )
}

interface PostEditorProps {
  editor: Editor
}

const PostEditor = (props: PostEditorProps) => {
  return (
    <RichTextEditor editor={props.editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ColorPicker
            colors={[
              '#25262b',
              '#868e96',
              '#fa5252',
              '#e64980',
              '#be4bdb',
              '#7950f2',
              '#4c6ef5',
              '#228be6',
              '#15aabf',
              '#12b886',
              '#40c057',
              '#82c91e',
              '#fab005',
              '#fd7e14',
            ]}
          />
          <RichTextEditor.UnsetColor />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
          <InsertYoutubeControl />
          <InsertImageControl />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      {props.editor && (
        <BubbleMenu editor={props.editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  )
}

export default PostEditor
