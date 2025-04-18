interface InputUrlTypes{
  setUrl: (string: string) => void,
  authenticateUrl: (boolean: boolean)=> void
}

export default function InputUrl({setUrl, authenticateUrl} : InputUrlTypes) {

  const authenticate = (url : string) => {
    if(!url.includes('https://www.instagram.com/')) return false;
    return true;
  }
  return (
    <input type="text" onChange={(event)=>{setUrl(event.target.value); authenticateUrl(authenticate(event.target.value))}} placeholder="insira url do post aqui" className="bg-amber-50 p-2 w-full rounded-2xl border-1 border-insta-basic md:mb-3" />
  )
}
