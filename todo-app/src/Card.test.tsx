import * as renderer from 'react-test-renderer';
import { Card } from './Card';

describe('Card', () => {
    it('Card renders correctly as div', () => {
        const tree = renderer
            .create(
                <Card as='div' title='Title'>
                    Card description
                </Card>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Card renders correctly as li', () => {
        const tree = renderer
            .create(
                <Card as='li' title='Title'>
                    Card description
                </Card>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Card renders correctly as main', () => {
        const tree = renderer
            .create(
                <Card as='li' title='Title' main>
                    Card description
                </Card>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})