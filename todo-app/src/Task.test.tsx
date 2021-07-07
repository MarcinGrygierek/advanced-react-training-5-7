import * as renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from './Task';
import { SingleTask } from './types/task';

describe('Task', () => {
    it('Task renders as opened', () => {
        const tree = renderer
        .create(
            <Task
                task={{
                    id: '1',
                    name: 'Test',
                    description: 'Test',
                    createdAt: new Date('7.07.2021, 07:00:00'),
                    finishedAt: null
                }}
                finishTask={() => {}}
                reopenTask={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('Task renders as closed', () => {
        const tree = renderer
        .create(
            <Task
                task={{
                    id: '1',
                    name: 'Test',
                    description: 'Test',
                    createdAt: new Date('7.07.2021, 07:00:00'),
                    finishedAt: new Date('8.07.2021, 07:00:00'),
                }}
                finishTask={() => {}}
                reopenTask={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })

    test('Task should be closed properly', async () => {
        const task: SingleTask = {
            id: '1',
            name: 'Test',
            description: 'Test',
            createdAt: new Date('7.07.2021, 07:00:00'),
            finishedAt: null
        }
        const { rerender } = render(<Task
            task={task}
            finishTask={() => {
                task.finishedAt = new Date()
            }}
            reopenTask={() => {}}
        />)

        fireEvent.click(screen.getByTestId('close-button'));

        rerender(<Task
            task={task}
            finishTask={() => {}}
            reopenTask={() => {}}
        />)

        expect(await screen.findByTestId('reopen-button')).toBeInTheDocument();
    })
})