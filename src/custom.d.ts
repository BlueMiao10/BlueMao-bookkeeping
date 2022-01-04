type RecordItem = {
  tags: Record<string, string>[]
  notes: string
  type: string
  amount: number // 数据类型 object | string
  createdAt?: Date  // 类 / 构造函数
}


type innerTag = {
  id: string
  name: string
  icon: string
}
type TagListModel = {
  data: innerTag[][]
  fetch: () => innerTag[][]
  init: () => innerTag[][]
  create: (name: string, icon: string, number: number) => 'success'
  destroy: (id: string) => boolean
  save: (data: innerTag[][]) => void
}

// interface Window {
// }