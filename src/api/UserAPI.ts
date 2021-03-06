import axios from 'axios'
import config from '../../config/hosts.json'
import { UserModel } from '@/api/models/UserModel'

const apiRoomPath = config.httpType + '://' + config.ip + ':' + config.backendPort + '/api/user'

export async function getUserData (): Promise<UserModel> {
  try {
    const res = await axios.get(apiRoomPath, { withCredentials: true })
    return new UserModel(res.data.identifier, res.data.username)
  } catch (error) {
    console.log(error)
    return new UserModel()
  }
}
