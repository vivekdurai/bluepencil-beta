<script>
	import FilePond, { registerPlugin, supported } from 'svelte-filepond';
	import { base } from '$lib/api';
	// const upload_url = base + '/documents';
	import { variables } from '$lib/variables';
	export const upload_url = variables.basePath+ '/documents';

    const token = localStorage.getItem('token');
    const serveroptions = {
        url: upload_url,
        headers: {'Authorization': `Bearer ${token}`}
    }
	// Import the Image EXIF Orientation and Image Preview plugins
	// Note: These need to be installed separately
	// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
	// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
	// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

	// Register the plugins
	// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
	import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

	// Register the plugin
	registerPlugin(FilePondPluginFileValidateType);
	// a reference to the component, used to call FilePond methods
	let pond;

	// pond.getFiles() will return the active files

	// the name to use for the internal file input
	let name = 'filepond';

	// handle filepond events
	function handleInit() {
		console.log('FilePond has initialised');
	}

	function handleAddFile(err, fileItem) {
		console.log('A file has been added', fileItem);
	}

    function handleprocessFile(err, fileItem) {
        console.log('A file has been processed', fileItem, fileItem.id);
        pond.removeFiles(fileItem.id);
    }
</script>

	<div class="relative max-w-8xl mx-auto">
		<FilePond
			bind:this={pond}
			{name}
			server={serveroptions}
			acceptedFileTypes={['application/pdf', 'application/msword', 'text/html', 'text/plain']}
			allowRevert={false}
			maxParallelUploads={28}
			instantUpload={true}
			allowMultiple={true}
			oninit={handleInit}
			onaddfile={handleAddFile}
			onprocessfile={handleprocessFile}
		/>
	</div>
