import type { Note } from '../models/note'
const { randomUUID } = require('crypto') 

class NoteService {
  private notes: Note[] = []

  create(title: string, body: string): Note {
    const now = new Date()
    const note: Note = {
      id: randomUUID(),
      title,
      body,
      createdAt: now,
      updatedAt: now
    }
    this.notes.push(note)
    return note
  }

  getAll(): Note[] {
    return [...this.notes]
  }

  update(id: string, title: string, body: string): Note {
    const note = this.notes.find(n => n.id === id)
    if (!note) throw new Error('Note not found')
    note.title = title
    note.body = body
    note.updatedAt = new Date()
    return note
  }

  delete(id: string): boolean {
    const index = this.notes.findIndex(n => n.id === id)
    if (index === -1) return false
    this.notes.splice(index, 1)
    return true
  }
}

module.exports =  NoteService  