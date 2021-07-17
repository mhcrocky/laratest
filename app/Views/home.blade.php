@extends('layouts.app')

@section('content')
    <div class="container">
        <livewire:user.user-list />
    </div>
@endsection
@section('js')
    <script src="{{ asset('js/users.js') }}"></script>
@endsection