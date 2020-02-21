import Joi from '@hapi/joi'

const tabSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  type: Joi.string().required(),
  tabTypes: Joi.array()
    .items(Joi.string().required())
    .min(1)
    .required(),
  artist: Joi.object({
    name: Joi.string().required(),
  }).unknown(true),
}).unknown(true)

export const validateTab = tab => {
  const { error, value } = tabSchema.validate(tab)
  if (error) return null
  return value
}

export const validateTabs = response => {
  if (!response || !response.data || !Array.isArray(response.data) || response.data.length === 0) {
    return null
  }
  return response.data.map(tab => validateTab(tab)).filter(tab => tab != null)
}
