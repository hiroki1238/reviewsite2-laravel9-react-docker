<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    //public function authorize()
    //{
        //return false;
    //}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'lastname' => 'required',
            'name' => 'required',
            'uname' => 'required',
            'email' => 'required', //requiredがあることにより入力が必須になる
            'profile' => 'max:400',
        ];
    }
}