import Header from './Header'

const layoutStyle = {
  maxWidth: 672,
  margin: 'auto',
  padding: '42px 21px',
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
