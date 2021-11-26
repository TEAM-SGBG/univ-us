import { useState } from 'react';
import EventInfoPresenter from './EventInfoPresenter';
import myEventPost from '../../../mock/HostCenterMock/myEventPost.json';

function EventInfoContainer() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <EventInfoPresenter
      myEventPost={myEventPost}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}

export default EventInfoContainer;
