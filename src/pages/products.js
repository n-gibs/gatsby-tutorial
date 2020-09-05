import React, { Component } from 'react'
import Layout from '../components/layout'
import styles from '../components/products.module.css'


export default class products extends Component {
  render() {
    return (
      <Layout>
      <div className={styles.page}>
        <h1>this is product page</h1>
        <p className={styles.text}>Incididunt minim id sint duis quis officia nostrud dolor officia ut Lorem ullamco. Eu non ut sunt sunt dolor. Nulla et anim cillum cupidatat ullamco laborum reprehenderit sit adipisicing ea dolore aute reprehenderit labore. Ea voluptate proident occaecat id commodo cupidatat cupidatat consectetur cupidatat in. Ex fugiat et duis aliquip eiusmod amet dolore ex dolor. Et minim nisi amet labore. Est ea voluptate dolore ut consequat in ad id amet dolore aliquip.</p>
      </div>
      </Layout>
    )
  }
}
