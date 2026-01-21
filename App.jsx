
import { useState } from 'react'
import products from './products.json'

export default function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const total = cart.reduce((sum, p) => sum + p.price, 0)

  return (
    <div style={{padding:'20px', fontFamily:'sans-serif'}}>
      <h1 style={{textAlign:'center'}}>🛒 हिंदी ई-कॉमर्स वेबसाइट</h1>
      <p style={{textAlign:'center'}}>कपड़े | शूज़ | खिलौने</p>

      <h2>🧺 कार्ट ({cart.length}) | कुल ₹{total}</h2>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',
        gap:'20px'
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            background:'#fff',
            borderRadius:'12px',
            padding:'10px',
            boxShadow:'0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <img src={p.image} style={{width:'100%', borderRadius:'10px'}} />
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <strong>₹{p.price}</strong>
            <button onClick={() => addToCart(p)} style={{
              width:'100%',
              marginTop:'10px',
              padding:'8px',
              background:'#000',
              color:'#fff',
              border:'none',
              borderRadius:'8px'
            }}>कार्ट में डालें</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{marginTop:'40px', padding:'20px', background:'#eee', borderRadius:'12px'}}>
          <h2>✅ चेकआउट</h2>
          <p>यह डेमो चेकआउट है (GitHub Pages compatible)</p>
          <button style={{padding:'10px 20px', fontSize:'16px'}}>ऑर्डर प्लेस करें</button>
        </div>
      )}
    </div>
  )
}
