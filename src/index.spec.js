import MockDate from 'mockdate'; // eslint-disable-line node/no-unpublished-import

import { formatNow } from './index';

beforeEach(() => {
  MockDate.set(new Date('2018-04-04T16:00:00.000Z'));
});

afterEach(() => {
  MockDate.reset();
});

describe('RelativeTime', () => {
  it('formats date with default format', () => {
    const formattedDate = formatNow();
    expect(formattedDate).toEqual('a few seconds ago');
  });
});
