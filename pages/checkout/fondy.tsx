import { useEffect } from 'react'
import Layout from 'src/components/layout'
import useTypedSelector from 'src/hooks/useTypedSelector'

declare let fondy: any

export default function FondyCheckout() {
  const cartDetails = useTypedSelector(state => state.cartReducer)
  
  useEffect(() => {
    const Options = {
      options: {
        methods: ['card'],
        methods_disabled: [],
        card_icons: ['mastercard', 'visa', 'maestro'],
        active_tab: 'card',
        fields: false,
        title: 'Оформление заказа',
        link: window.location.origin,
        full_screen: true,
        button: true,
        email: true
      },
      params: {
        merchant_id: 1396424,
        required_rectoken: 'y',
        currency: 'RUB',
        amount: cartDetails.total * 100,
        order_desc: 'Demo order'
      }
    }

    fondy('#checkout-container', Options)
      .$on("success", function(model: any) {
        console.log("success event handled")
    
        var order_status = model.attr("order.order_data.order_status")
    
        if (order_status == "approved") {
          alert("Order is approved. Do somethng on approve...")
        }
      })
      .$on("error", function(model: any) {
        console.log("error event handled")
        var response_code = model.attr("error.code")
        var response_description = model.attr("error.message")
        alert(
          "Order is declined: " +
            response_code +
            ", description: " +
            response_description
        )
      })
  }, [cartDetails.total])
  return (
    <Layout>
      <div id='checkout-container'></div>
    </Layout>
  )
}