import execa from 'execa'

export default async (): Promise<string> => {
  const { stdout } = await execa('git', ['rev-parse', 'HEAD'])

  return stdout
}
