import Navbar from "@/components/Navbar"
import {ProductBrowser} from '@ecwid/nextjs-ecwid-plugin'

export default function Store () {
    return (
        <div>
            <Navbar/>
  <ProductBrowser
        storeId="7579020"
      />
        </div>
    )
}