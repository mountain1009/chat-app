import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

// import styled from 'styled-components'
import CircleRadioGroup from '~/components/molecules/CircleRadioGroup'
import { AnimalsViewModel } from '~/core/presenter/animal/animalsViewModel'

// const _AnimalSelectSection = styled(BaseSection)`
//   max-width: 600px;
//   margin: 0 auto;
// `
//
// const AnimalSetButton = styled.button`
//   display: block;
//   background: gray;
//   width: 100%;
//   color: white;
//   margin: 20px 0;
//   padding: 10px;
//   border-radius: 10px;
// `
type Props = {
  animals: AnimalsViewModel[]
}

const AnimalSelectSection = (props: Props) => {
  const { animals } = props
  const { data: session } = useSession()
  const router = useRouter()

  const [state, setState] = useState<number | undefined>(undefined)
  const radioClick = (e: number) => {
    setState(e)
  }

  const setAnimalClick = async () => {
    const animal = animals.find((_, i) => state === i)

    if (!session) {
      return alert('Step1のログインを行ってください。')
    }
    if (state === undefined) {
      return alert('動物を選択してください。')
    }
    if (!animal) {
      return alert('動物が存在しません。')
    }
    try {
      await fetch('/api/user/animals', {
        method: 'PUT',
        body: JSON.stringify({ animalId: animal.id }),
      })
      await router.push('/chats')
    } catch (e) {
      alert('設定に失敗しました。')
    }
  }
  return (
    <div>
      <CircleRadioGroup state={state} onChange={radioClick} items={animals} />
      <div className="my-0 mx-auto w-10/12">
        <button
          className="w-full rounded bg-accent py-5 text-5xl text-base"
          onClick={setAnimalClick}
        >
          確定
        </button>
      </div>
    </div>
  )
}

export default AnimalSelectSection
