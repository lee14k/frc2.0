import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import {ProductBrowser} from '@ecwid/nextjs-ecwid-plugin'

export default function Store () {
    return (
        <div>
            <Navbar/>
  <ProductBrowser
        storeId="7579020"
      />
      <Footer/>
        </div>
    )
}