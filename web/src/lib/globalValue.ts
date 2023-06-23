const STAGE = process.env.STAGE ?? 'dev'
const BUCKET = `pocky-${STAGE}-s3`

export { STAGE, BUCKET }
