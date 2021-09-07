interface IconProps {
  iconName: string
  className: string
}

const Icon = ({ iconName, className }: IconProps) => {
  return (
    <span className={className}> {iconName}</span>
  )
}

export { Icon }
