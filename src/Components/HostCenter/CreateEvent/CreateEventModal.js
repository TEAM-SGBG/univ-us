import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router';

const CreateEventModal = ({ loading }) => {
  const history = useHistory();
  const { pathname } = history.location;

  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    setVisible(false);
    history.push(`${pathname.split('/').slice(0, 3).join('/')}/createevent`);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!loading) setVisible(true);
  }, [loading]);

  return (
    <Modal
      title="행사가 없음!"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      행사가 존재하지 않습니다. 개설하러 가시겠습니까?
    </Modal>
  );
};

export default CreateEventModal;
