import React from 'react'
import Counter from '@/app/(components)/Counter/counter'
export const metadata = {
    title: 'Product Page',
    description: 'THis is an SEO Friendly meta description'
  }

const ProductDetail = ({params}) => {


  return (
    <div><p>
        Product Detail for {params.productId}
        <Counter/>
   
    </p></div>
  )
}

export default ProductDetail