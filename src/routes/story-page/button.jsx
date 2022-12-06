import Stories from '../stories'
import Button from '../button/Button'

const bordered = {
  arg: 'Bordered',
  variant: 'bordered',
  label: 'Button',
}

const fill = {
  arg: 'Fill',
  variant: 'fill',
  label: 'Button',
}

const transparent = {
  arg: 'Transparent',
  variant: 'transparent',
  label: 'Button',
}

const ButtonStory = () => (
  <Stories
    argList={[bordered, fill, transparent]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory
