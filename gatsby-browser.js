import "./src/styles/global.scss"
import "firebase"
import "firebase/messaging"
import loadableReady from "@loadable/component"
import ReactDOM from "react-dom"

const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
        ReactDOM.render(element, container, callback)
    })
  }
}

export default replaceHydrateFunction