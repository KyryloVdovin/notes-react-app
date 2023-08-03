import { NoteCategories } from './enumerators';

export function countActiveElements(state) {
    let activeTasks = 0;
    let activeIdea = 0;
    let activeRandomThought = 0;
    let activeQuote = 0;

    state.activeNotes.map(item => {
        switch (item.category) {
            case NoteCategories.Task:
                activeTasks = !item.isArchived ? activeTasks + 1 : activeTasks;
                break;
            case NoteCategories.Idea:
                activeIdea = !item.isArchived ? activeIdea + 1 : activeIdea;
                break;
            case NoteCategories.RandomThought:
                activeRandomThought = !item.isArchived ? activeRandomThought + 1 : activeRandomThought;
                break;
            case NoteCategories.Quote:
                activeQuote = !item.isArchived ? activeQuote + 1 : activeQuote;
                break;
        }
    });

    state.taskActiveNotesCount = activeTasks;
    state.ideaActiveNotesCount = activeIdea;
    state.randomThoughtActiveNotesCount = activeRandomThought;
    state.quoteActiveNotesCount = activeQuote;
}

export function countArchivedElements(state) {
    let archivedTasks = 0;
    let archivedIdea = 0;
    let archivedRandomThought = 0;
    let archivedQuote = 0;

    state.archivedNotes.map(item => {
        switch (item.category) {
            case NoteCategories.Task:
                archivedTasks = archivedTasks + 1;
                break;
            case NoteCategories.Idea:
                archivedIdea = archivedIdea + 1;
                break;
            case NoteCategories.RandomThought:
                archivedRandomThought = archivedRandomThought + 1;
                break;
            case NoteCategories.Quote:
                archivedQuote = archivedQuote + 1;
                break;
        }
    });

    state.taskArchivedNotesCount = archivedTasks;
    state.ideaArchivedNotesCount = archivedIdea;
    state.randomThoughtArchivedNotesCount = archivedRandomThought;
    state.quoteArchivedNotesCount = archivedQuote;
}

export const updateObjectInArray = (items, itemId, newObjProps) => {
    return items.map(u => {
        if (u.id === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}

export const summaryNotesCount = (item, properties) => {
    const summaryItem = {
        activeNotes: 0,
        archivedNotes: 0
    }

    switch (item.category) {
        case 'Task':
            summaryItem.activeNotes = properties.taskActiveNotesCount;
            summaryItem.archivedNotes = properties.taskArchivedNotesCount;
            break;
        case 'Idea':
            summaryItem.activeNotes = properties.ideaActiveNotesCount;
            summaryItem.archivedNotes = properties.ideaArchivedNotesCount;
            break;
        case 'Random thought':
            summaryItem.activeNotes = properties.randomThoughtActiveNotesCount;
            summaryItem.archivedNotes = properties.randomThoughtArchivedNotesCount;
            break;
        case 'Quote':
            summaryItem.activeNotes = properties.quoteActiveNotesCount;
            summaryItem.archivedNotes = properties.quoteArchivedNotesCount;
            break;
    }

    return summaryItem;
}