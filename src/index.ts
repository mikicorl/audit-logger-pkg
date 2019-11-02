import axios from 'axios'

class Logger {
  projectToken: string

  constructor (projectToken: string) {
    this.projectToken = projectToken
  }

  public add (loggerName: string, data: any) {
     axios.post('/api/add', {data: data, projectToken: this.projectToken})
  }

  public get (loggerName: string, data: any) {
    const postData = {
      projectToken: this.projectToken
    }
     axios.get('/api/add', { params: {postData}})
  }
}