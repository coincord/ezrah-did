import { EzrahDID } from '../index'

describe('configuration', () => {
  it('can use rpcUrl', () => {
    const ezrahDid = new EzrahDID({
      identifier: '0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247',
      rpcUrl: 'http://localhost:9585',
      chainNameOrId: 1337,
    })
    expect(ezrahDid).toBeDefined()
  })
})
