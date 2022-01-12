import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import products1 from '../pages/api/snipcart/snipchart-item-product-1.json'
import products2 from '../pages/api/snipcart/snipchart-item-product-2.json'
import products3 from '../pages/api/snipcart/snipchart-item-product-3.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>This is only test purpose for my online store</title>
        <meta name="My test online store" content="Built with love powered by Next.js and Snipcart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">My Test Online Store!</a>
        </h1>

        <h2>
          This is only test purpose for my online store
        </h2>

        <div className={styles.snipcart}>
          <h2 className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
              <strong>You cart summary:</strong> <span className="snipcart-total-price">$0.00</span>
          </h2>
        </div>
        
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {products1.map(product1 => {
            return (
              <div key={product1.id} className={styles.card}>
                <img src={product1.image} alt={`Preview of ${product1.name}`} />
                <h3>{ product1.name }</h3>
                <p>{ product1.description }</p>
                <p>{ product1.custom1_name }</p>
                <p>{ product1.custom1_options_name }</p>
                <p>${ product1.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product1.id}
                    data-item-name={product1.name}
                    data-item-description={product1.description}
                    data-item-custom1-name={product1.custom1_name}
                    data-item-custom1-options={product1.custom1_options}
                    data-item-file-guid={product1.fileGuid}
                    data-item-image={product1.image}
                    data-item-url={product1.url}
                    data-item-price={product1.price}
                  >
                    <p>Add to Cart</p>
                  </button>
                </p>
              </div>
            );
          })}
          {products2.map(product2 => {
            return (
              <div key={product2.id} className={styles.card}>
                <img src={product2.image} alt={`Preview of ${product2.name}`} />
                <h3>{ product2.name }</h3>
                <p>{ product2.description }</p>
                <p>{ product2.custom1_name }</p>
                <p>{ product2.custom1_options_name }</p>
                <p>${ product2.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product2.id}
                    data-item-name={product2.name}
                    data-item-description={product2.description}
                    data-item-custom1-name={product2.custom1_name}
                    data-item-custom1-options={product2.custom1_options}
                    data-item-file-guid={product2.fileGuid}
                    data-item-image={product2.image}
                    data-item-url={product2.url}
                    data-item-price={product2.price}
                  >
                    <p>Add to Cart</p>
                  </button>
                </p>
              </div>
            );
          })}
          {products3.map(product3 => {
            return (
              <div key={product3.id} className={styles.card}>
                <img src={product3.image} alt={`Preview of ${product3.name}`} />
                <h3>{ product3.name }</h3>
                <p>{ product3.description }</p>
                <p>{ product3.custom1_name }</p>
                <p>{ product3.custom1_options_name }</p>
                <p>${ product3.price }</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product3.id}
                    data-item-name={product3.name}
                    data-item-description={product3.description}
                    data-item-custom1-name={product3.custom1_name}
                    data-item-custom1-options={product3.custom1_options}
                    data-item-file-guid={product3.fileGuid}
                    data-item-image={product3.image}
                    data-item-url={product3.url}
                    data-item-price={product3.price}
                  >
                    <p>Add to Cart</p>
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <h5>
          Built with ❤️ and ☕ powered by <a href="https://nextjs.org">Next.js</a> and <a href="https://snipcart.com">Snipcart</a>{' '}
          <span className={styles.logo}>
            <Image src="/public/img/Next.js.svg" alt="Next.js Logo" width={72} height={16} />
          </span>
        </h5>
      </footer>
    </div>
  )
}
