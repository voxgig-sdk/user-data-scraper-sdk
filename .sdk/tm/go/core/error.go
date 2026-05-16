package core

type UserDataScraperError struct {
	IsUserDataScraperError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUserDataScraperError(code string, msg string, ctx *Context) *UserDataScraperError {
	return &UserDataScraperError{
		IsUserDataScraperError: true,
		Sdk:              "UserDataScraper",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UserDataScraperError) Error() string {
	return e.Msg
}
