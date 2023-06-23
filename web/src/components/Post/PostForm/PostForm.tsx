import type { EditPostById, UpdatePostInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import PostEditor from 'src/components/Post/PostEditor'
import { useTipTapEditor } from 'src/hook/useEditor'

type FormPost = NonNullable<EditPostById['post']>

interface PostFormProps {
  post?: EditPostById['post']
  onSave: (data: UpdatePostInput, id?: FormPost['id']) => void
  error: RWGqlError
  loading: boolean
}

const PostForm = (props: PostFormProps) => {
  const editor = useTipTapEditor(props.post ? props.post.body : '')

  const onSubmit = (data: FormPost) => {
    data.body = editor.getHTML()
    data.thumbnail = findFirstImgTag(data.body)
    props.onSave(data, props?.post?.id)
  }

  const findFirstImgTag = (html: string) => {
    const result = RegExp(`<img[^>]*src="([^"]+)"[^>]*>`).exec(html)
    if (result == null) return ''
    return result[1]
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPost> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />
        {props.post && (
          <>
            <Label
              name="CreatedAt"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            />
            <TextField
              name="createdAt"
              defaultValue={props.post?.createdAt}
              className="rw-input color-input text-lg"
            />
            <FieldError name="createdAt" className="rw-field-error" />
          </>
        )}

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <div className="rw-input">
          <PostEditor editor={editor} />
        </div>
        <FieldError name="body" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
