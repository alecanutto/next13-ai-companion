'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Companion, Message } from '@prisma/client'
import { useCompletion } from 'ai/react'

import { ChatHeader } from '@/components/chat-header'
import { ChatMessages } from '@/components/chat-messages'
import { ChatForm } from '@/components/chat-form'
import { ChatMessageProps } from '@/components/chat-message'

interface ChatClientProps {
  companion: Companion & {
    messages: Message[]
    _count: {
      messages: number
    }
  }
}

export const ChatClient = ({ companion }: ChatClientProps) => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatMessageProps[]>(
    companion.messages,
  )

  const { input, isLoading, handleInputChange, handleSubmit, setInput } =
    useCompletion({
      api: `/api/chat/${companion.id}`,
      onFinish(prompt, completion) {
        const systemMessage: ChatMessageProps = {
          role: 'system',
          content: completion,
        }

        setMessages((messages) => [...messages, systemMessage])
        setInput('')

        router.refresh()
      },
    })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: 'user',
      content: input,
    }

    setMessages((messages) => [...messages, userMessage])

    handleSubmit(e)
  }

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      <ChatMessages
        companion={companion}
        isLoading={isLoading}
        messages={messages}
      />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}
