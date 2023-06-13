import {
  DocumentTextIcon,
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  {
    label: '홈',
    name: 'home',
    icon: HomeIcon,
  },
  {
    label: '소개',
    name: 'about',
    icon: InformationCircleIcon,
  },
  {
    label: '아티클',
    name: 'articles',
    icon: DocumentTextIcon,
  },
  {
    label: '문의',
    name: 'contact',
    icon: UserIcon,
  },
]

export default navigation
