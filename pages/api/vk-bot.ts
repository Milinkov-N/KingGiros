import type { NextApiRequest, NextApiResponse } from 'next'
import VkBot from 'node-vk-bot-api'

type VkBotApiResponse = {
  status: string
  message: string
}

const token = `${process.env.VK_BOT_ACCESS_TOKEN}`

const peer_id = process.env.NODE_ENV !== 'development'
  ? process.env.KG_VK_BOT_PEER_ID
  : process.env.KG_VK_BOT_DEV_PEER_ID
  
const bot = new VkBot(token)

export interface VkBotApiRequest extends NextApiRequest {
  body: {
    message: string
  }
}

export default async function handler(
  { body: { message } }: VkBotApiRequest,
  res: NextApiResponse<VkBotApiResponse>
) {
  try {
    const botRes = await bot.execute('messages.send', {
      random_id: Math.floor(Math.random() * 10000),
      peer_id,
      message
    })

    res.status(200).json({
      status: 'ok',
      message: botRes
    }) 
  } catch (e) {
    console.error(e)
    res.status(500)
  }
}