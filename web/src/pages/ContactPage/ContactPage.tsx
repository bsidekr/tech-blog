import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import SimpleLayout from 'src/layouts/SimpleLayout/SimpleLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <SimpleLayout
        title="문의"
        intro={`모두가 가상에서 현실을 꿈꿀 때 비사이드는 현실에서 꿈을 실천하고자 합니다. \n🚀 채용문의 : careers@bside.ai`}
      >
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
        >
          <FormError
            error={error}
            wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
            listClassName="list-disc ml-4"
            listItemClassName=""
          />
          <Label
            name="name"
            className="block text-sm uppercase text-gray-700"
            errorClassName="block uppercase text-sm text-red-700"
          >
            Name
          </Label>
          <TextField
            name="name"
            validation={{ required: true }}
            className="rounded-sm border px-2 py-1 outline-none"
            errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none"
          />
          <FieldError name="name" className="block text-red-700" />

          <Label
            name="email"
            className="mt-8 block text-sm uppercase text-gray-700"
            errorClassName="block mt-8 text-red-700 uppercase text-sm"
          >
            Email
          </Label>
          <TextField
            name="email"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^.]+\..+/,
                message: 'Please enter a valid email address',
              },
            }}
            className="rounded-sm border px-2 py-1"
            errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none"
          />
          <FieldError name="email" className="block text-red-700" />

          <Label
            name="message"
            className="mt-8 block text-sm uppercase text-gray-700"
            errorClassName="block mt-8 text-red-700 uppercase text-sm"
          >
            Message
          </Label>
          <TextAreaField
            name="message"
            validation={{ required: true }}
            className="block rounded-sm border px-2 py-1"
            errorClassName="block border rounded-sm px-2 py-1 border-red-700 outline-none"
          />
          <FieldError name="message" className="block text-red-700" />

          <Submit
            className="mt-8 block rounded bg-blue-700 px-4 py-2 text-white"
            disabled={loading}
          >
            Save
          </Submit>
        </Form>
      </SimpleLayout>
    </>
  )
}

export default ContactPage
