import { UPDATE_TCP_DATA } from './types'

export const updateTCPAction = (ip, port) => {
    return {
        type: UPDATE_TCP_DATA,
        newIp: ip,
        newPort: port,
    }
}