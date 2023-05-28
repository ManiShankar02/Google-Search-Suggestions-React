import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="itemList">
      <p className="para">{suggestion}</p>
      <button type="button" className="btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrowImage"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
