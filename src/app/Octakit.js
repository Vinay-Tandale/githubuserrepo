import { Octokit } from 'octokit'
// const seckey='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'
const octokit = new Octokit({
  auth: seckey
})

export default octokit