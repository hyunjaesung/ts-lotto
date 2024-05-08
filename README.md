## 2주차 과제 - 로또

### 과제

[링크](https://www.notion.so/Lotto-4003ffd7096e461dbc6f790f60d61157)

### 과제 제출

1. 자기 이름으로 main에서 브랜치를 만든다 (브랜치 이름 예시 stevy)
2. 해당 브랜치에서 작업 브랜치를 만든다 (브랜치 이름 예시 stevy-step1)
3. stevy-step1에서 stevy로 pr을 올리고 리뷰 요청을 한다
4. 전원 approve가 되면 merge하고 다음 step을 진행한다 (코드리뷰 반영하고 pull 받으면서 다음 작업진행 무방함)

### 구현

- views/
  - PurchaseInputView
  - LottoNumberListView
  - WinningLottoInputView
  - LottoResultView
- models/
  - LottoNumbers
    - \_numbers: number[6]
    - add (num)
  - WinningLottoNumber => for step2
    - \_lottoNumbers: LottoNumbers
    - \_bonusNumber: number
  - LottoMatch
    - \_numMatch: number
    - \_numHit: number
    - \_amountReward: Number
  - LottoMatchingList
    - \_matchingList: LottoMatch[4]
    - constructor() {
      for(let i=3; i<=6; i++) {
      this.\_matchingList.push(new LottoMatch(i, 0))
      }
      }
    - setLottoMatch({numMatch, numHit}) {
      const matchResult = results.findIndex(result => result.numMatch === numMatch);
      if(matchResult !== -1) {
      this.\_matchingList[matchResult].numHit = numHit;
      }
      }
    - getTotalReward => number
- services/
  - LottoNumberGenerator
    - getRandomNumber(limit: number) => number
    - checkDuplication(numbers: number[], newNumber: number) => boolean
    - generate(numLottery: number) => Lotto[numCount]
  - LottoResultChecker
    - checkMatch(lottos: LottoNumber, winning: Winning)
    - rateOfReturn(match: LottoMatchingList)
    - checkResults(lottos)
  - LottoPurchase
    - \_pricePerLottery
    - \_numPrice
    - getNumLottery(numPrice)
- factories/
  - LottoNumbersFactory
    - build(numCount: number)
  - LottoMatchesFactory
    - build()
