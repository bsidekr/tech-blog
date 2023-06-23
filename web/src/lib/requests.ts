import { BUCKET } from './globalValue'

type PresignedS3Response = {
  uploadURL: string
  filename: string
}

/**
 * S3에 파일을 업로드하는 함수
 */
export const uploadToS3 = async (file: File, isPublic = true) => {
  try {
    const urlResponse = await fetch(process.env.API_URL + '/uploads', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({
        fileName: `uploads/${file.name}`,
        fileType: file.type,
        isPublic: isPublic,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const urlData = (await urlResponse.json()) as PresignedS3Response
    const uploadURL = urlData.uploadURL

    await fetch(uploadURL, {
      method: 'put',
      body: file,
    })
    return {
      success: 1,
      file: {
        url: `https://${BUCKET}.s3.ap-northeast-2.amazonaws.com/${urlData.filename}`,
        name: file.name,
        size: file.size,
        title: file.name.split('/').slice(-1)[0],
        type: file.type,
      },
    }
  } catch (error) {
    // console.error(error)
    return {
      success: 0,
      message: error.message,
    }
  }
}
