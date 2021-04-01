import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import UserListItem from "../index";

const getUserList = () => [
  {
    userId: 'userid-1',
    nickname: 'Topy',
    profileUrl: 'https://static.sendbird.com/sample/profiles/profile_12_512px.png',
  },
  {
    userId: 'userid-2',
    nickname: 'Middly',
    profileUrl: 'https://static.sendbird.com/sample/user_sdk/user_sdk_01.png',
  },
  {
    userId: 'userid-3',
    nickname: 'Bottomy',
    profileUrl: 'https://static.sendbird.com/sample/user_sdk/user_sdk_14.png',
  },
];

describe.skip('UserListItem', () => {
  it('should render text prop', function() {
    const [ user1 ] = getUserList();
    const component = mount(<UserListItem user={user1} />);

    expect(
      component.find(".sendbird-user-list-item__title").hostNodes().text()
    ).toEqual(user1.nickname);
  });

  it('should do a snapshot test of the UserListItem DOM', function() {
    const [ user1 ] = getUserList();
    const component = renderer.create(
      <UserListItem
        user={user1}
        checkBox
        checked={true}
        onChange={() => { }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
