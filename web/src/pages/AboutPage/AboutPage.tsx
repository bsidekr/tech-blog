import Container from 'src/components/Container/Container'
import SocialLinks from 'src/components/SocialLinks/SocialLinks'

const AboutPage = () => {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src="https://pocky-production-s3.s3.ap-northeast-2.amazonaws.com/uploads/files/about"
                alt="bside korea app"
                className="hidden rotate-3 rounded-2xl object-contain dark:block xs:max-w-lg"
              />
              <img
                src="https://pocky-production-s3.s3.ap-northeast-2.amazonaws.com/uploads/files/about_light"
                alt="bside korea app"
                className="rotate-3 rounded-2xl object-contain dark:hidden xs:max-w-lg"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              비사이드코리아
            </h1>
            <p className="my-16 font-medium text-zinc-800 dark:text-zinc-200">
              &quot;회사의 매출은 오르는데 왜 내 주식은 그대로인가요?&quot;
            </p>
            <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                한국 경제는 항상 &apos;코리아 디스카운트&apos;라는 저평가의 늪에
                빠져 있습니다. 제일 큰 요인은 ESG중 G에 해당하는 한국의
                기업지배구조와 경영 투명성 부문입니다.
              </p>
              <p>
                한국 기업은 소수 대주주의 이익 위주로 회사가 운영되는 경우가
                많으며, 기업은 주주들의 소유라는 자본주의적 인식이 부족합니다.
                수익성과 자산가치가 해외 기업과 비교했을 때 밀리지 않는 수준이라
                하더라도 코리아 디스카운트가 적용되면 최대 6~70% 평가
                절하됩니다.
              </p>
              <p>
                비사이드코리아는, 21년 9월에 설립된 스타트업이며 자산운용사,
                소액주주연대와 함께 행동주의 캠페인을 준비하고 실행하는 플랫폼
                서비스를 제공하고 있습니다. 22년 3월 서비스를 런칭하여
                SM엔터테인먼트, 금호석유화학, 사조산업 등의 캠페인을 진행하였고,
                현재 국내 7개 은행주, BYC, 포스코 등 11개의 캠페인을
                진행중입니다. 이중 SM엔터테인먼트의 경우 각종 언론, 공중파,
                삼프로TV등에 노출되면서 에스엠 주주총회에서 완승을 거두었습니다.
                앞으로 비사이드코리아는 증권사 연동, 주주 집결력 강화, 기관 매칭
                연계를 강화하여 코리아 디스카운트를 해결하고자 합니다.
              </p>
              <p>비사이드코리아는 작지만, 빠르게 성장하고 있습니다.</p>
              <ul className="list-disc pl-4">
                <li>
                  법인 설립한 지 1년도 채 되지 않아, 행동주의 전략을 수행하는
                  국내 top tier 자산운용사로부터 seed와 후속 투자를 성공적으로
                  유치했습니다.
                </li>
                <li>
                  고객사와의 계약 확정을 통해 초기 매출을 달성했으며, 22,
                  23년도의 누적 위임액수가 3,000억을 넘었습니다.
                </li>
                <li>
                  뛰어난 팀원들이 서로 시너지를 내며 함께 만들어나가고 있으며,
                  훌륭한 어드바이저 분들과 긴밀하게 협업하고 있습니다.
                </li>
              </ul>
            </div>
            <p className="my-16 font-medium text-zinc-800 dark:text-zinc-200">
              <a
                href="https://www.bside.ai"
                className="my-16 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                행동하는 주주 커뮤니티 플랫폼,
                <span className="ml-2 !text-purple-600 hover:!text-purple-400 dark:!text-purple-200 dark:hover:!text-purple-300">
                  비사이드코리아
                </span>
              </a>
            </p>
          </div>
          <div className="lg:pl-20">
            <SocialLinks />
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutPage
