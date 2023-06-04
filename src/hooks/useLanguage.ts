import { useTranslation } from 'react-i18next'

let dictionary = {}

const addText = (text: string) => {
  const find = Object.keys(dictionary).find(key => key === text)

  if (find) return

  dictionary = {
    ...dictionary,
    [text]: text
  }
  console.log(JSON.stringify(dictionary, null, 4))
}

export default function useLanguage () {
  const translator = useTranslation().t

  const t = (text: string) => {
    // NOTE: Uncomment this line to add new text to dictionary
    // addText(text)

    return translator(text)
  }

  return {
    t
  }
}
