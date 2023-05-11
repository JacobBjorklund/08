import Image from 'next/image'
import { Inter } from 'next/font/google'
import Container from '@/components/Container'
import { FormEvent, use, useState } from 'react'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [nameinput, setName] = useState('')
  const [phonenumber, setPhonenumber] = useState('')

  const [contacts, setContacts] = useState<any[]>([
    { name: 'Anna Andersson', phoneNumber: '050425443' },
    { name: 'Peter Griffin', phoneNumber: '050425443' },
    { name: 'Peppa Pig', phoneNumber: '050425443' },
  ])

  const onAdd = (e: FormEvent) => {
    e.preventDefault()
    setContacts([
      ...contacts,
      { name: nameinput, phoneNumber: phonenumber }])

    setName('')
    setPhonenumber('')
    setIsAddModalOpen(false)
  }

  const onRemove = (index: number) => {
    const newContacts = [...contacts]
    newContacts.splice(index, 1)
    setContacts(newContacts)
  }

  return (
    <Container>

      <h1>Contacts</h1>
      <button onClick={() => setIsAddModalOpen(true)}>Add contact</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={contact.name + contact.phoneNumber}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td><button onClick={() => onRemove(i)}>Z</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <form className='flex flex-col gap-3' onSubmit={onAdd}>
          <label>
            <span>Name</span>
            <input className='border p-1' value={nameinput} onChange={e => setName(e.target.value)} type="text" />
          </label>
          <label>
            <span>PhoneNumber</span>
            <input className='border p-1' value={phonenumber} onChange={e => setPhonenumber(e.target.value)} type="text" />
          </label>
          <button>Add</button>
        </form>
      </Modal>

    </Container>
  )
}
