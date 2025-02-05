import { Slug } from './slug'

test('should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Create question title')

  expect(slug.value).toEqual('create-question-title')
})
