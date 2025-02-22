import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types'


type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

function Link({ page, selectedPage, setSelectedPage}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage  === lowerCasePage ?  "text-secondary-500  font-semibold" : ""} transition duration-500 hover:text-black`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

export default Link