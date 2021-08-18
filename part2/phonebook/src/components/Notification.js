const Notification = ({ message, class_name }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={[class_name, 'message'].join(' ')}>
      {message}
    </div>
  )
}

export default Notification
