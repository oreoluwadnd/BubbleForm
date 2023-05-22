// import { renderHook, act } from '@testing-library/react-hooks'
import { BubbleForm } from '../src/index'

describe('useForm', () => {
  describe('smoke tests', () => {
    it('should be a function', () => {
      expect(typeof BubbleForm).toBe('function')
    })
  })
})
