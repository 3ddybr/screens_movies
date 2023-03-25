import { useState, CSSProperties } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

export function Spinier() {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('#eb0470')

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}
      <h1>Carregando ...</h1>
      <PacmanLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
