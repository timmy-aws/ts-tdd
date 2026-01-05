const NoteService = require('../services/noteService')

describe('NoteService', () => {
  let service: typeof NoteService

  beforeEach(() => {
    service = new NoteService()
  })

  it('creates a note', () => {
    const note = service.create('Title', 'Body')
    expect(note).toHaveProperty('id')
    expect(note.title).toBe('Title')
    expect(note.body).toBe('Body')
    expect(note.createdAt).toBeInstanceOf(Date)
    expect(note.updatedAt).toBeInstanceOf(Date)
  })

  it('lists all notes', () => {
    service.create('A', 'B')
    service.create('C', 'D')
    const notes = service.getAll()
    expect(notes.length).toBe(2)
  })

  it('gets a note', () => {
    const created = service.create('Title', 'Body')
    const found = service.getSingleById(created.id)
    expect(found).toEqual(created)
  })

  it('Returns undefined when note does not exist', () => {
    
    expect(service.getSingleById('missing')).toBeUndefined
  })

  it('updates a note', () => {
    const note = service.create('Old', 'Body')
    const updated = service.update(note.id, 'New', 'Body2')
    expect(updated.title).toBe('New')
    expect(updated.body).toBe('Body2')
    expect(updated.updatedAt.getTime()).toBeGreaterThanOrEqual(updated.createdAt.getTime())
  })

  it('deletes a note', () => {
    const note = service.create('Temp', 'Delete me')
    const result = service.delete(note.id)
    expect(result).toBe(true)
    expect(service.getAll().length).toBe(0)
  })
})
